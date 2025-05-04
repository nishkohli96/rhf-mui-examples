echo "🏁 Initiating Setup..."

# Check for pnpm
if ! command -v pnpm &> /dev/null; then
  echo "📦 pnpm not found. Installing..."
  npm install -g pnpm@10.10.0
else
  echo "✅ pnpm is globally installed."
fi

echo "📦 Installing dependencies..."
pnpm install
