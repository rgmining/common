"""Package information of common library for review graph mining project.
"""
from setuptools import setup, find_packages


def _load_requires_from_file(filepath):
    """Read a package list from a given file path.

    Args:
      filepath: file path of the package list.

    Returns:
      a list of package names.
    """
    with open(filepath) as fp:
        return [pkg_name.strip() for pkg_name in fp.readlines()]


setup(
    name='rgmining-common',
    version='0.9.0',
    author="Junpei Kawamoto",
    author_email="kawamoto.junpei@gmail.com",
    description="Common library for Review graph mining project",
    url="https://github.com/rgmining/common",
    packages=find_packages(exclude=["tests"]),
    install_requires=_load_requires_from_file("requirements.txt"),
    test_suite='tests.suite'
)
