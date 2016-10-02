"""Provides writers to output information in certain format.
"""
import csv
import json


class JSONWriter(object):
    """Output reviewers in JSON format.
    """

    def __init__(self, output):
        self.output = output

    def write(self, item):
        json.dump(item, self.output)
        self.output.write("\n")


class CSVWriter(object):
    """Output reviewers in CSV format.
    """

    def __init__(self, output, headers):
        self.output = csv.DictWriter(output, headers)
        self.output.writeheader()

    def write(self, item):
        self.output.writerow(item)
