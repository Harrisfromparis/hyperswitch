# 🧠 Neurolist

> A task management application designed specifically for neurodiverse individuals, helping break down complex tasks into manageable, checkable steps.

## 🌟 Features

### Core Functionality
- ✅ **Task Breakdown**: Break any task into clear, actionable steps
- ✅ **Progress Tracking**: Visual progress bars and completion statistics
- ✅ **Step-by-Step Execution**: Check off steps as you complete them
- ✅ **Task Organization**: Filter between all, active, and completed tasks
- ✅ **Persistent Storage**: Your tasks are saved locally in your browser
- ✅ **Clean, Accessible UI**: Designed with neurodiversity in mind

### Why Neurolist?

Neurolist is built to address common challenges faced by neurodiverse individuals:

1. **Task Paralysis**: Large tasks can be overwhelming. Neurolist helps you break them down into bite-sized steps.
2. **Working Memory**: Written steps reduce the cognitive load of remembering what needs to be done.
3. **Motivation & Progress**: Visual feedback through checkboxes and progress bars provides a sense of accomplishment.
4. **Focus**: Clear, organized interface minimizes distractions and cognitive overhead.
5. **Flexibility**: Add as many steps as needed, with no rigid structure imposed.

## 🚀 Getting Started

### Running Locally

1. **Clone this repository** (if you haven't already):
   ```bash
   git clone https://github.com/Harrisfromparis/hyperswitch.git
   cd hyperswitch/neurolist
   ```

2. **Open in a browser**:
   - Simply open `index.html` in your web browser
   - Or use a local server:
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js
   npx serve
   ```

3. **Access the application**:
   - Navigate to `http://localhost:8000` in your browser

### No Installation Required

Neurolist is a pure client-side application:
- No backend server needed
- No dependencies to install
- Works entirely in your browser
- Data stored locally using localStorage

## 📖 How to Use

### Creating a Task

1. **Enter a task title**: E.g., "Prepare for job interview"
2. **Add a description** (optional): Additional context or notes
3. **Define steps**: Break down the task into actionable steps
   - Click "+ Add Step" to add more steps
   - Remove unwanted steps with the × button
4. **Click "Create Task"**: Your task appears in the task list below

### Managing Tasks

- **Check off steps**: Click the checkbox next to each step as you complete it
- **Track progress**: Watch the progress bar fill up as you complete steps
- **Filter tasks**: Use "All", "Active", or "Completed" filters
- **Delete tasks**: Click the "Delete" button on any task
- **Auto-completion**: Tasks automatically mark as complete when all steps are checked

### Example Tasks

**Example 1: Morning Routine**
- Step 1: Wake up and get out of bed
- Step 2: Brush teeth
- Step 3: Take medication
- Step 4: Eat breakfast
- Step 5: Get dressed

**Example 2: Grocery Shopping**
- Step 1: Check pantry for needed items
- Step 2: Make a shopping list
- Step 3: Check for coupons or deals
- Step 4: Drive to grocery store
- Step 5: Shop for items on list
- Step 6: Pay at checkout
- Step 7: Drive home
- Step 8: Put groceries away

**Example 3: Study for Exam**
- Step 1: Review syllabus and exam topics
- Step 2: Gather notes and materials
- Step 3: Create study schedule
- Step 4: Review chapter 1-3
- Step 5: Take practice quiz
- Step 6: Review incorrect answers
- Step 7: Create summary notes

## 🎨 Design Principles

### Accessibility First
- High contrast colors for better readability
- Large, clickable targets for easier interaction
- Clear visual hierarchy
- Keyboard-friendly navigation
- Screen reader compatible

### Cognitive Load Reduction
- Minimal distractions
- Clean, uncluttered interface
- Clear visual feedback
- Consistent design patterns
- Progressive disclosure of information

### Neurodiversity-Friendly
- Visual progress indicators for motivation
- Breaking tasks into manageable chunks
- Flexible step structure
- No time pressure or deadlines
- Positive reinforcement through completion feedback

## 🛠️ Technical Details

### Technology Stack
- **Frontend**: Vanilla HTML, CSS, and JavaScript
- **Storage**: Browser localStorage API
- **Design**: Custom CSS with modern, accessible styling
- **Architecture**: Class-based JavaScript with event-driven updates

### Browser Compatibility
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Opera (latest)

### File Structure
```
neurolist/
├── index.html      # Main HTML structure
├── styles.css      # All styling and responsive design
├── app.js          # Application logic and state management
└── README.md       # This file
```

## 🔒 Privacy & Data

- **100% Local**: All data is stored in your browser's localStorage
- **No Server**: No data is sent to any server
- **No Tracking**: No analytics or tracking code
- **No Account Required**: Use immediately without registration
- **Data Control**: Clear your browser's localStorage to reset

### Data Export/Import (Future Enhancement)

Currently planned features:
- Export tasks as JSON
- Import tasks from file
- Backup and restore functionality

## 🚀 Future Enhancements

### Planned Features
- [ ] **Task Templates**: Pre-defined task templates for common activities
- [ ] **Reminders**: Optional notifications for task deadlines
- [ ] **Categories/Tags**: Organize tasks by category (work, personal, health, etc.)
- [ ] **Dark Mode**: Eye-friendly dark theme option
- [ ] **Data Export/Import**: Backup and restore your tasks
- [ ] **Task Notes**: Add notes or attachments to tasks
- [ ] **Recurring Tasks**: Set up tasks that repeat daily/weekly
- [ ] **Time Estimates**: Add estimated time for each step
- [ ] **Pomodoro Integration**: Built-in timer for focused work sessions
- [ ] **Collaboration**: Share tasks with friends, family, or support persons
- [ ] **Mobile App**: Native iOS and Android versions
- [ ] **Voice Input**: Add tasks and steps using voice commands
- [ ] **Gamification**: Achievement badges and streaks for motivation

### Advanced Features (Roadmap)
- **AI-Powered Task Breakdown**: Automatically suggest steps for common tasks
- **Smart Scheduling**: Suggest optimal times to work on tasks
- **Integration**: Sync with calendars, to-do apps, and productivity tools
- **Accessibility Profiles**: Customizable UI based on specific needs (ADHD, autism, dyslexia, etc.)
- **Multi-language Support**: Internationalization for global users

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### Ways to Contribute
1. **Report Bugs**: Open an issue describing the problem
2. **Suggest Features**: Share your ideas for improvements
3. **Submit PRs**: Fix bugs or implement new features
4. **Improve Documentation**: Help make the docs clearer
5. **Share Feedback**: Tell us how you use Neurolist

### Development Setup
```bash
# Fork the repository
# Clone your fork
git clone https://github.com/YOUR_USERNAME/hyperswitch.git
cd hyperswitch/neurolist

# Make your changes
# Test thoroughly

# Submit a pull request
```

## 📄 License

This project is part of the Hyperswitch repository and follows the same license.
See the main [LICENSE](../LICENSE) file for details.

## 🙏 Acknowledgments

- Designed with input from neurodiverse individuals
- Built with accessibility best practices
- Inspired by executive function support tools

## 📞 Support & Contact

- **Issues**: [GitHub Issues](https://github.com/Harrisfromparis/hyperswitch/issues)
- **Discussions**: [GitHub Discussions](https://github.com/Harrisfromparis/hyperswitch/discussions)

## 💡 Tips for Success

1. **Start Small**: Begin with simple tasks to get comfortable with the app
2. **Be Specific**: Make steps as clear and actionable as possible
3. **Break It Down**: If a step feels too big, break it into smaller sub-steps
4. **Celebrate Wins**: Each checked box is an accomplishment!
5. **Adjust as Needed**: Tasks can be deleted or recreated if your plan changes
6. **Use Daily**: Regular use helps build task-completion habits

---

Made with ❤️ for the neurodiverse community
