#!/usr/bin/env bash
# Exit on error
set -o errexit

# Build Frontend
echo "Building Frontend..."
npm install --prefix frontend
npm run build --prefix frontend

# Install Backend Dependencies
echo "Installing Backend Dependencies..."
pip install -r backend/requirements.txt

# Download NLTK Data
echo "Downloading NLTK Data..."
python -m nltk.downloader vader_lexicon stopwords wordnet omw-1.4
