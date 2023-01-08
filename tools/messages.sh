#!/bin/bash

clasp logs $1 --json | rg '"message":'