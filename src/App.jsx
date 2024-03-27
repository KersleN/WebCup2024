import React, { useState } from 'react';
import {
  Box,
  Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  InputRightElement,
  Text,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from '@chakra-ui/react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { motion } from 'framer-motion';

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(true);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleShowPassword = () => setShowPassword(!showPassword);

  const handleTabChange = (index) => {
    setIsSignUp(index === 0);
  };

  const MotionBox = motion(Box);

  return (
    <Flex
      height="100vh"
      alignItems="center"
      justifyContent="center"
      bg="linear-gradient(to bottom right, #6B46C1, #D53F8C)"
    >
      <Box
        bg="white"
        p={8}
        borderRadius="lg"
        boxShadow="2xl"
        maxWidth="400px"
        width="100%"
        position="relative"
        overflow="hidden"
      >
        <MotionBox
          position="absolute"
          top="-50px"
          left="-50px"
          right="-50px"
          bottom="-50px"
          borderRadius="full"
          bg="linear-gradient(to bottom right, #6B46C1, #D53F8C)"
          opacity={0.2}
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
        />
        <Box position="relative" zIndex={1}>
          <MotionBox
            textAlign="center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5, ease: 'easeOut' }}
          >
            <Heading mb={6} color="purple.500">
              Welcome
            </Heading>
          </MotionBox>
          <Tabs
            variant="unstyled"
            mb={6}
            onChange={(index) => handleTabChange(index)}
          >
            <TabList display="flex" justifyContent="center">
              <Tab
                _selected={{
                  color: 'purple.500',
                  fontWeight: 'bold',
                  borderBottom: '2px solid',
                  borderColor: 'purple.500',
                }}
                _focus={{ outline: 'none' }}
              >
                Sign Up
              </Tab>
              <Tab
                _selected={{
                  color: 'purple.500',
                  fontWeight: 'bold',
                  borderBottom: '2px solid',
                  borderColor: 'purple.500',
                }}
                _focus={{ outline: 'none' }}
              >
                Log In
              </Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <Box
                  opacity={isSignUp ? 1 : 0}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                  <Input mb={4} placeholder="Full Name" />
                  <Input mb={4} placeholder="Email Address" type="email" />
                  <InputGroup mb={6}>
                    <Input
                      placeholder="Password"
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={handlePasswordChange}
                    />
                    <InputRightElement>
                      <Button variant="ghost" onClick={handleShowPassword}>
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  <Button
                    bg="purple.500"
                    color="white"
                    _hover={{ bg: 'purple.600' }}
                    mb={4}
                    width="100%"
                  >
                    Sign Up
                  </Button>
                </Box>
              </TabPanel>
              <TabPanel>
                <Box
                  opacity={isSignUp ? 0 : 1}
                  transition={{ duration: 0.5, ease: 'easeInOut' }}
                >
                  <Input mb={4} placeholder="Email Address" type="email" />
                  <InputGroup mb={6}>
                    <Input
                      placeholder="Password"
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={handlePasswordChange}
                    />
                    <InputRightElement>
                      <Button variant="ghost" onClick={handleShowPassword}>
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  <Button
                    bg="purple.500"
                    color="white"
                    _hover={{ bg: 'purple.600' }}
                    mb={4}
                    width="100%"
                  >
                    Log In
                  </Button>
                </Box>
              </TabPanel>
            </TabPanels>
          </Tabs>
          <Text fontSize="sm" textAlign="center" color="gray.500">
            Forgot Password?
          </Text>
        </Box>
      </Box>
    </Flex>
  );
};

export default SignUpPage;