import React from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    Button,
    RadioGroup,
    useDisclosure,
  } from '@chakra-ui/react';
  import {HamburgerIcon} from '@chakra-ui/icons';

   const Navigation = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [placement, setPlacement] = React.useState('right')
  return (
    <div>
      <RadioGroup defaultValue={placement} onChange={setPlacement}>
      </RadioGroup>
      <Button colorScheme='blue' onClick={onOpen}>
      <HamburgerIcon/>
      </Button>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
          <DrawerBody>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </div>
  )
}

export default Navigation
