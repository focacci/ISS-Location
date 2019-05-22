import unittest
import issLocation

class testGetIssLocation(unittest.TestCase):

    def testGetLocation(self):
        location = issLocation.getIssLocation()
        print(location)


if __name__ == '__main__':
    unittest.main()
