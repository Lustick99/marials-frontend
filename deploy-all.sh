#!/bin/bash

# ========== CONFIGURATION ==========
REPO_URL="https://github.com/lustick99/marials-frontend.git"
DEPLOY_DIR="deploy"
BRANCH="gh-pages"

# ========== BUILD DES APPS ==========
echo "🛠️  Build des applications Angular..."

ng build main --configuration production --base-href /marials-frontend/
ng build maritime --configuration production --base-href /marials-frontend/maritime/

# ========== PRÉPARATION DU DOSSIER DE DÉPLOIEMENT ==========
echo "📦 Préparation du dossier $DEPLOY_DIR..."

rm -rf $DEPLOY_DIR
mkdir $DEPLOY_DIR

# Copier les builds dans les bons sous-dossiers
cp -r dist/main/browser/* $DEPLOY_DIR/
mkdir -p $DEPLOY_DIR/maritime
cp -r dist/maritime/browser/* $DEPLOY_DIR/maritime/

# ========== INITIALISATION GIT ==========
echo "🔧 Initialisation de la branche $BRANCH..."

cd $DEPLOY_DIR
git init
git remote add origin $REPO_URL
git checkout -b $BRANCH

# ========== COMMIT & PUSH ==========
echo "🚀 Commit & push vers la branche $BRANCH..."

git add .
git commit -m "🚀 Deploy multi-apps $(date +'%Y-%m-%d %H:%M:%S')"
git push --force origin $BRANCH

cd ..

echo "✅ Déploiement terminé !"
