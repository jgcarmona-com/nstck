##!/usr/bin/env bash
# This script set up the credentials for the PYPI repositories
#
# Usage: ./pypi_credentails.sh <package-name>

cat > "$1/.netrc" << ENDOFFILE
machine $GITLAB-PYPI-HOST
    login $GITLAB-PYPI-USERNAME
    password $GITLAB-PYPI-PASSWORD
ENDOFFILE

cat > "$1/pip.conf" << ENDOFFILE
[global]
extra-index-url = https://$GITLAB_PYPI_HOST/api/v4/projects/$1/packages/pypi/simple
ENDOFFILE