import { v4 as uuidv4 } from 'uuid';

const outputRandomString = () => {
  const randomString = uuidv4()
  console.log(`${new Date()}: ${randomString}`)

  setInterval(() => {
    console.log(`${new Date()}: ${randomString}`)
  }, 5000);
}

outputRandomString()
