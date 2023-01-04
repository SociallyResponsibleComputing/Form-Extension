'''
Purpose: Filter Clasp logs output
'''

import fileinput
import os
import sys
import json
#from re import split
import re

'''
ERROR      
2023-01-04T17:22:02.776Z onSubmit        
{"message":"ReferenceError: Blob is not defined\n    
at PutFile(githubAPI:10:30)\n    
at onSubmit(GetResponses:22:5)","serviceContext":
{"service":"AKfycbxvdICVijhDXkFupBluJdVwb0q9QdRaIMteLPSJdQ"},"context":
{"reportLocation":{"filePath":"githubAPI","lineNu
'''

if not os.isatty(sys.stdin.fileno()):
    #logs = sys.stdin.read()
    #logs = re.split('INFO+', logs)
    logs = json.load(sys.stdin)
    print(logs)

else: # nothing in stdin
    print ("no input")
