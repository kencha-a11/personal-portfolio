off
@echo off
echo =====================================================
echo 🔥 CLEANING GIT HISTORY AND REMOVING LARGE FILES 🔥
echo =====================================================

REM Step 1. Delete large video files if they exist
echo Deleting large video files...
del /Q public\v1.mp4 2>nul
del /Q public\v2.mp4 2>nul

REM Step 2. Remove .git folder completely
echo Removing old Git history...
rmdir /S /Q .git

REM Step 3. Re-initialize Git
echo Reinitializing Git repository...
git init
git add .
git commit -m "Clean project: removed large video files and reset history"

REM Step 4. Rename branch and push to GitHub
git branch -M cleaned-main
git remote add origin https://github.com/kencha-a11/personal-portfolio.git
git push -u --force origin cleaned-main

echo =====================================================
echo ✅ CLEAN GIT HISTORY COMPLETED SUCCESSFULLY!
echo =====================================================
pause
