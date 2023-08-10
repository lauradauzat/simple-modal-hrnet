# simple-modal-hrnet

simple-modal-hrnet is a lightweight npm package that provides a simple and customizable modal component for your React applications. This package allows you to easily display a modal with a clean and user-friendly design, making it suitable for various use cases, such as displaying success messages, alerts, or any other type of informative content.

## Technologies Used
- Node JS - version 18.16.0
- Npm - version 9.5.1
- React: version 18.2.0

## Installation

You can install simple-modal-hrnet using npm:

```sh
npm install simple-modal-hrnet
``` 

## Usage

To use the simple-modal-hrnet component in your React application, follow these steps:

Import the Modal component:
```javascript
import Modal from 'simple-modal-hrnet';
```


Import the modal component in your application
```javascript 
import React, { useState } from 'react';
import Modal from 'simple-modal-hrnet';
import 'simple-modal-hrnet/Modal.css';

function App() {
  const [modalVisible, setModalVisible] = useState(false);

  const handleModalClose = () => {
    setModalVisible(false);
  };

  return (
    <div>
      <button onClick={() => setModalVisible(true)}>Show Modal</button>

      <Modal visible={modalVisible} onClose={handleModalClose} />
    </div>
  );
}

export default App;
```


In the example above, we imported the Modal component and included its styles. Inside the App component, we used local state to control the visibility of the modal. When the "Show Modal" button is clicked, the modal becomes visible. Clicking the close button within the modal triggers the onClose callback, hiding the modal again.

## Props

The Modal component accepts the following props:

visible (boolean, required): Controls the visibility of the modal. Pass true to show the modal and false to hide it.
onClose (function, required): Callback function to be executed when the modal is closed. This function should update the visible state to false.