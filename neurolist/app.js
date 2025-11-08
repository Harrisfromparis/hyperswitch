// Neurolist - Task Management Application
class NeurolistApp {
    constructor() {
        this.tasks = this.loadTasks();
        this.currentFilter = 'all';
        this.init();
    }

    init() {
        this.setupEventListeners();
        this.renderTasks();
        this.updateStats();
    }

    setupEventListeners() {
        // Task form submission
        document.getElementById('taskForm').addEventListener('submit', (e) => {
            e.preventDefault();
            this.createTask();
        });

        // Add step button
        document.getElementById('addStepBtn').addEventListener('click', () => {
            this.addStepInput();
        });

        // Filter buttons
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.addEventListener('click', (e) => {
                this.setFilter(e.target.dataset.filter);
            });
        });

        // Setup initial remove step listeners
        this.updateRemoveStepButtons();
    }

    addStepInput() {
        const container = document.getElementById('stepsContainer');
        const stepCount = container.children.length + 1;
        
        const stepGroup = document.createElement('div');
        stepGroup.className = 'step-input-group';
        stepGroup.innerHTML = `
            <input type="text" class="step-input" placeholder="Step ${stepCount}: " required>
            <button type="button" class="remove-step-btn" aria-label="Remove step">×</button>
        `;
        
        container.appendChild(stepGroup);
        this.updateRemoveStepButtons();
        
        // Focus the new input
        stepGroup.querySelector('.step-input').focus();
    }

    updateRemoveStepButtons() {
        const container = document.getElementById('stepsContainer');
        const removeButtons = container.querySelectorAll('.remove-step-btn');
        
        // Remove old listeners and add new ones
        removeButtons.forEach((btn, index) => {
            const newBtn = btn.cloneNode(true);
            btn.parentNode.replaceChild(newBtn, btn);
            
            newBtn.addEventListener('click', () => {
                if (container.children.length > 1) {
                    newBtn.parentElement.remove();
                    this.updateRemoveStepButtons();
                }
            });
            
            // Disable if only one step remains
            newBtn.disabled = container.children.length === 1;
        });
    }

    createTask() {
        const title = document.getElementById('taskTitle').value.trim();
        const description = document.getElementById('taskDescription').value.trim();
        const stepInputs = document.querySelectorAll('.step-input');
        
        const steps = Array.from(stepInputs)
            .map(input => input.value.trim())
            .filter(step => step !== '')
            .map((text, index) => ({
                id: Date.now() + index,
                text,
                completed: false
            }));

        if (steps.length === 0) {
            alert('Please add at least one step to your task!');
            return;
        }

        const task = {
            id: Date.now(),
            title,
            description,
            steps,
            createdAt: new Date().toISOString(),
            completed: false
        };

        this.tasks.unshift(task);
        this.saveTasks();
        this.renderTasks();
        this.updateStats();
        
        // Reset form
        document.getElementById('taskForm').reset();
        
        // Reset steps to one input
        const stepsContainer = document.getElementById('stepsContainer');
        stepsContainer.innerHTML = `
            <div class="step-input-group">
                <input type="text" class="step-input" placeholder="Step 1: " required>
                <button type="button" class="remove-step-btn" aria-label="Remove step">×</button>
            </div>
        `;
        this.updateRemoveStepButtons();

        // Show success message
        this.showNotification('Task created successfully! 🎉');
    }

    deleteTask(taskId) {
        if (confirm('Are you sure you want to delete this task?')) {
            this.tasks = this.tasks.filter(task => task.id !== taskId);
            this.saveTasks();
            this.renderTasks();
            this.updateStats();
            this.showNotification('Task deleted');
        }
    }

    toggleStep(taskId, stepId) {
        const task = this.tasks.find(t => t.id === taskId);
        if (task) {
            const step = task.steps.find(s => s.id === stepId);
            if (step) {
                step.completed = !step.completed;
                
                // Auto-complete task if all steps are done
                const allStepsCompleted = task.steps.every(s => s.completed);
                if (allStepsCompleted && !task.completed) {
                    task.completed = true;
                    this.showNotification('🎊 Task completed! Great job!');
                } else if (!allStepsCompleted && task.completed) {
                    task.completed = false;
                }
                
                this.saveTasks();
                this.renderTasks();
                this.updateStats();
            }
        }
    }

    setFilter(filter) {
        this.currentFilter = filter;
        
        // Update active button
        document.querySelectorAll('.filter-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.filter === filter);
        });
        
        this.renderTasks();
    }

    getFilteredTasks() {
        switch (this.currentFilter) {
            case 'active':
                return this.tasks.filter(task => !task.completed);
            case 'completed':
                return this.tasks.filter(task => task.completed);
            default:
                return this.tasks;
        }
    }

    renderTasks() {
        const tasksList = document.getElementById('tasksList');
        const emptyState = document.getElementById('emptyState');
        const filteredTasks = this.getFilteredTasks();

        if (filteredTasks.length === 0) {
            tasksList.style.display = 'none';
            emptyState.style.display = 'block';
            
            if (this.currentFilter === 'active') {
                emptyState.innerHTML = '<p>🎉 No active tasks! You\'re all caught up!</p>';
            } else if (this.currentFilter === 'completed') {
                emptyState.innerHTML = '<p>📋 No completed tasks yet. Keep going!</p>';
            } else {
                emptyState.innerHTML = '<p>📝 No tasks yet. Create your first task above!</p>';
            }
            return;
        }

        tasksList.style.display = 'flex';
        emptyState.style.display = 'none';

        tasksList.innerHTML = filteredTasks.map(task => this.renderTaskCard(task)).join('');

        // Add event listeners for checkboxes and delete buttons
        filteredTasks.forEach(task => {
            task.steps.forEach(step => {
                const checkbox = document.getElementById(`step-${task.id}-${step.id}`);
                if (checkbox) {
                    checkbox.addEventListener('change', () => {
                        this.toggleStep(task.id, step.id);
                    });
                }
            });

            const deleteBtn = document.getElementById(`delete-${task.id}`);
            if (deleteBtn) {
                deleteBtn.addEventListener('click', () => {
                    this.deleteTask(task.id);
                });
            }
        });
    }

    renderTaskCard(task) {
        const completedSteps = task.steps.filter(s => s.completed).length;
        const totalSteps = task.steps.length;
        const progress = totalSteps > 0 ? (completedSteps / totalSteps) * 100 : 0;

        return `
            <div class="task-card ${task.completed ? 'completed' : ''}">
                <div class="task-header">
                    <h3 class="task-title">${this.escapeHtml(task.title)}</h3>
                    <div class="task-actions">
                        <button class="task-action-btn delete-btn" id="delete-${task.id}">
                            Delete
                        </button>
                    </div>
                </div>
                
                ${task.description ? `
                    <p class="task-description">${this.escapeHtml(task.description)}</p>
                ` : ''}
                
                <div class="steps-list">
                    ${task.steps.map(step => `
                        <div class="step-item ${step.completed ? 'completed' : ''}">
                            <input 
                                type="checkbox" 
                                class="step-checkbox" 
                                id="step-${task.id}-${step.id}"
                                ${step.completed ? 'checked' : ''}
                            >
                            <label for="step-${task.id}-${step.id}" class="step-text">
                                ${this.escapeHtml(step.text)}
                            </label>
                        </div>
                    `).join('')}
                </div>
                
                <div class="step-progress">
                    <div class="progress-bar">
                        <div class="progress-fill" style="width: ${progress}%"></div>
                    </div>
                    <span class="progress-text">${completedSteps}/${totalSteps}</span>
                </div>
            </div>
        `;
    }

    updateStats() {
        const totalTasks = this.tasks.length;
        const activeTasks = this.tasks.filter(t => !t.completed).length;
        const completedTasks = this.tasks.filter(t => t.completed).length;
        const totalSteps = this.tasks.reduce((sum, task) => sum + task.steps.length, 0);

        document.getElementById('totalTasks').textContent = totalTasks;
        document.getElementById('activeTasks').textContent = activeTasks;
        document.getElementById('completedTasks').textContent = completedTasks;
        document.getElementById('totalSteps').textContent = totalSteps;
    }

    showNotification(message) {
        // Simple notification - could be enhanced with a toast library
        const notification = document.createElement('div');
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #10b981;
            color: white;
            padding: 1rem 1.5rem;
            border-radius: 0.5rem;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            z-index: 1000;
            animation: slideIn 0.3s ease;
        `;
        notification.textContent = message;
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.animation = 'slideOut 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    saveTasks() {
        localStorage.setItem('neurolist-tasks', JSON.stringify(this.tasks));
    }

    loadTasks() {
        try {
            const stored = localStorage.getItem('neurolist-tasks');
            return stored ? JSON.parse(stored) : [];
        } catch (error) {
            console.error('Error loading tasks:', error);
            return [];
        }
    }
}

// Initialize the app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new NeurolistApp();
});

// Add slideOut animation
const style = document.createElement('style');
style.textContent = `
    @keyframes slideOut {
        from {
            opacity: 1;
            transform: translateX(0);
        }
        to {
            opacity: 0;
            transform: translateX(100px);
        }
    }
`;
document.head.appendChild(style);
