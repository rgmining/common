"""Provide common classes and functions.

The common module and its submodules probides varies functions ans classes
which can be used in any context.

Functions
------------
This module provides the following functions which are alias of ones in
sub-modules.

:func:`print_args <common.decorator.print_args>`
    Decorate a function so that print arguments before calling it.
:func:`print_return <common.decorator.print_return>`
    Decorate a function so that print result after calling it.
:func:`constant <common.decorator.constant>`
    Decorate a function so that the result is a constant value.
:func:`memoized <common.decorator.memoized>`
    Decorate a function to memoize results.
"""
from __future__ import absolute_import
from common.decorator import print_args
from common.decorator import print_return
from common.decorator import constant
from common.decorator import memoized
