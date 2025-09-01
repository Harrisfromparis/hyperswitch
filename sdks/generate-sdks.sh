#!/bin/bash

# Hyperswitch SDK Generation Script
# This script generates client SDKs from OpenAPI specifications

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(cd "$SCRIPT_DIR/.." && pwd)"
SDKS_DIR="$SCRIPT_DIR"

# OpenAPI spec files
OPENAPI_SPEC_V1="$ROOT_DIR/api-reference/v1/openapi_spec_v1.json"
OPENAPI_SPEC_V2="$ROOT_DIR/api-reference/v2/openapi_spec_v2.json"

echo "🚀 Generating Hyperswitch SDKs..."

# Check if OpenAPI Generator is available
if ! command -v openapi-generator-cli &> /dev/null; then
    echo "📦 Installing OpenAPI Generator..."
    npm install -g @openapitools/openapi-generator-cli
fi

# Generate JavaScript/TypeScript SDK
echo "📦 Generating JavaScript/TypeScript SDK..."
openapi-generator-cli generate \
    -i "$OPENAPI_SPEC_V1" \
    -g typescript-fetch \
    -o "$SDKS_DIR/javascript" \
    --additional-properties=npmName=@hyperswitch/node-sdk,supportsES6=true,npmVersion=1.0.0

# Generate Python SDK
echo "🐍 Generating Python SDK..."
openapi-generator-cli generate \
    -i "$OPENAPI_SPEC_V1" \
    -g python \
    -o "$SDKS_DIR/python" \
    --additional-properties=packageName=hyperswitch,projectName=hyperswitch-python-sdk,packageVersion=1.0.0

echo "✅ SDK generation completed!"
echo "📁 Generated SDKs available in:"
echo "   - JavaScript/TypeScript: $SDKS_DIR/javascript"
echo "   - Python: $SDKS_DIR/python"