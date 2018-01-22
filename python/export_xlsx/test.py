#!/usr/bin/env python
# -*- coding: utf-8 -*-

import xlrd

data = xlrd.open_workbook('test.xlsx')

table = data.sheet_by_index(0)

nrows = table.nrows
ncols = table.ncols

print "nrows", nrows
print "ncols", ncols

for i in range(nrows):
	print "row_values:", i, table.row_values(i)

for r in range(nrows):
	for c in range(ncols):
		print "table.cell", r, c, table.cell(r, c)