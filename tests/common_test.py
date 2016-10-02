"""Unit test for common package.
"""
import random
from StringIO import StringIO
import unittest

import common

def sample_function(*_args, **kwargs):
    """Sample function for testing decorators.

    Positional Args:
      dummy inputs

    Keyword Args:
      Keys are computed.

    Returns:
      Key list of the given keyword arguments.
    """
    return kwargs.keys()


class TestDecorator(unittest.TestCase):
    """Test case for common.decorator module.
    """
    def setUp(self):
        """Set up for a test."""
        self.args = tuple(range(10))
        self.kwargs = dict(abc=1, bcd=2, cdf=3)

    def test_print_args(self):
        """Test for print_args.
        """
        buf = StringIO()
        f = common.print_args(buf)(sample_function)
        f(*self.args, **self.kwargs)

        res = buf.getvalue()
        self.assertTrue(str(self.args) in res, str(self.args) + res)
        self.assertTrue(str(self.kwargs) in res, str(self.kwargs) + res)

    def test_print_return(self):
        """Test for print_return.
        """
        buf = StringIO()
        f = common.print_return(buf)(sample_function)
        f(*self.args, **self.kwargs)

        res = buf.getvalue()
        self.assertTrue(
            str(self.kwargs.keys()) in res, str(self.kwargs.keys()) + res)

    def test_constant(self):
        """Test for constant.
        """
        f = common.constant(sample_function)
        res0 = f(*self.args, **self.kwargs)

        self.assertEqual(res0, f())
        self.assertEqual(res0, f(10))
        self.assertEqual(res0, f(some="thing"))
        self.assertEqual(res0, f(15, 1, any="thing"))

    def test_memoized(self):
        """Test for memoized.
        """
        f = common.memoized(random.randint)
        res0 = f(10, 1024)
        self.assertEqual(res0, f(10, 1024))


if __name__ == "__main__":
    unittest.main()
