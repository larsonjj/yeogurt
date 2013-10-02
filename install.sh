# Installer script for Yeogurt

# Colors
RESTORE='\033[0m'
RED='\033[00;31m'
GREEN='\033[00;32m'
PURPLE='\033[00;35m'
CYAN='\033[00;36m'

# Message
FINISH='COMPLETED'


# Functions
function runAfterBower {
    echo "Checking SVN Info";
    if ! svn info;
    then
        echo -e "${RED}This is not an SVN Repository!${RESTORE}";
        echo -e "${RED}Skipping SVN setup...${RESTORE}";
    else
        svn propset svn:ignore -F .svnignore . && cd sites/example-site && svn propset svn:ignore -F .svnignore .;
        if [ $? -eq 0 ]; then
            echo -e "${RED}An Error occured when trying to setup SVN ignores${RESTORE}";
            echo "Please try remedying any errors and run this script again."
        else
            echo -e "${CYAN}SVN ignores set!${RESTORE}";
        fi
    fi
}

function runAfterNPMs {
    echo "Installing Bower Dependencies...";
    npm install -g bower && bower install;
    if [ $? -eq 0 ]; then
        echo -e "${CYAN}Bower dependencies are installed!${RESTORE}";
        runAfterBower;
    else
        echo -e "${RED}Bower dependencies are not installed!${RESTORE}";
        echo "Please try remedying any errors and run this script again."
        echo "Otherwise you'll need to troubleshoot your bower install";
    fi
}

function runAfterRuby {
    npm install && cd sites/example-site && npm install;
    if [ $? -eq 0 ]; then
        echo -e "${CYAN}NPMs are installing!${RESTORE}";
        runAfterNPMs;
    else
        echo -e "${RED}NPMs are not installed!${RESTORE}";
        echo "Please try remedying any errors and run this script again."
        echo "Otherwise you'll need to troubleshoot your node install";
    fi
}

function runAfterNode {
    echo "Checking Ruby Version...";
    if ! ruby -v;
    then
        echo -e "${RED}Ruby is not installed!${RESTORE}";
        echo -e "Please install Xcode and Command Line Tools";
        echo -e "Go to ${GREEN}https://itunes.apple.com/us/app/xcode/id497799835?mt=12${RESTORE}";
    else
        echo -e "${CYAN}Ruby is installed!${RESTORE}";
        echo "Installing Needed Gems...";
        gem install bundle;
        if [ $? -eq 0 ]; then
            bundle install;
            if [ $? -eq 0 ]; then
                echo -e "${CYAN}Gems are installed!${RESTORE}";
                runAfterRuby;
            else
                echo -e "${RED}Gem install failed!${RESTORE}";
                echo "Try Remedying any errors and running this script again.";
                echo "Otherwise you'll need to troubleshoot your ruby install";
            fi
        else
            echo "${RED}Gem install failed!${RESTORE}";
            echo "Try Remedying any errors and running this script again.";
            echo "Otherwise you'll need to troubleshoot your ruby install";
        fi
    fi
}

# BEGIN
# Ask for the administrator password upfront
sudo -v;

echo -e "${PURPLE}########## INSTALL STARTED @ `date` ##########${RESTORE}";
# Check to see if node is installed
echo "Checking Node Version...";
if ! node -v;
then
    echo -e "${RED}Node is not installed!${RESTORE}";
    echo "Will try and install Node...";
    echo "Checking Ruby Version...";
    if ! ruby -v;
    then
        echo -e "${RED}Ruby is not installed!${RESTORE}";
        echo -e "Please install Xcode and Command Line Tools";
        echo -e "Go to ${GREEN}https://itunes.apple.com/us/app/xcode/id497799835?mt=12${RESTORE}";
    else
        echo -e "${CYAN}Ruby is installed!${RESTORE}";
        echo "Installing Homebrew...";
        ruby -e "$(curl -fsSL https://raw.github.com/mxcl/homebrew/go)";
        if [ $? -eq 0 ]; then
            echo "${CYAN}Homebrew installed!${RESTORE}";
            echo "Installing Node...";
            brew install node
            if [ $? -eq 0 ]; then
                echo "${CYAN}Node installed!${RESTORE}";
                runAfterNode;
            else
                echo -e "${RED}Node install failed!${RESTORE}";
                echo -e "Please go to: ${GREEN}https://github.com/mxcl/homebrew/wiki${RESTORE} for troubleshooting";
            fi
        else
            echo -e "${RED}Homebrew install failed!${RESTORE}";
            echo -e "Please go to: ${GREEN}https://github.com/mxcl/homebrew/wiki${RESTORE} for troubleshooting";
        fi
    fi
else
    echo -e "${CYAN}Node is installed!${RESTORE}";
    runAfterNode;
fi

echo -e "${PURPLE}########## INSTALL ${FINISH} @ `date` ##########${RESTORE}";
exit 0;
