import { toggleElements, navigateSlide } from '../../../assets/js/helpers';
import Slide3 from '../slides/Slide3'
import Slide2 from '../slides/Slide2'

const robotId = ['robot'];
const malwaresIds = ['malware-img-div', 'virus', 'ransomware', 'trojan', 'worm', 'antivirus-img-div', 'kaspersky', 'shield'];
const villainId = ['villain-img-div', 'villain'];
const passwordId = ['password-img-div', 'password'];
const pwdManager1Id = ['pwdmanager1-img-div', 'pwdmanager1']; // Add this line
const pwdManager2Id = ['pwdmanager2-img-div', 'pwdmanager2']; // Add this line
const all = [...robotId, ...malwaresIds, ...villainId, ...passwordId, ...pwdManager1Id, ...pwdManager2Id]; // Include the new IDs here

export const intro = [
  {
    text: 'Greetings, cyber apprentice! Welcome to Module 2: Passwords and Authentication.' +
    'In this module, we will learn about the importance of strong, unique passwords, ' +
    'how to use password managers, and what two-factor authentication is.',
    action: () => toggleElements(robotId),
    ids: robotId,
  },
  {
    text:
    ' Creating a powerful password is super important to keep your online accounts safe from people who shouldn\'t be there, like this evil Haunter!' +
    ' Make sure each of your passwords is different for every account so that if one password is ever guessed by the evil Haunter it won\'t put all your other accounts at risk.',
    action: () => toggleElements(villainId),
    ids: villainId,
  },
  {
    text:
    'Avoid using easily guessable information such as birthdays, names, or common words in your passwords. ' +
    ' Go for a combination of uppercase and lowercase letters, numbers, and symbols to improve security.',
    action: () => toggleElements(passwordId),
    ids: passwordId,
  },
  {
    text: 'Are you ready to dive in, learn the secrets of cybersecurity, and become ' +
    'a hero of the virtual realm? Great! Let the Cybersecurity Quest begin! ',
    okActions: [
      () => toggleElements(all, false, true),
      () => navigateSlide(Slide2)
    ],
  },
];

export const dialogues2 = [
  { 
    text: 'Password Managers: Remembering all those strong, unique passwords can be tough. That is where password managers come in. They are like a secure vault for all your passwords!',
    action: () => toggleElements([...robotId, ...pwdManager1Id]),
    ids: [...robotId, ...pwdManager1Id],
  },
  { 
    text: 'Password managers not only store your passwords securely but also generate complex and unique passwords for you! ' +
          'With the help of a password manager, you only need to remember one master password to access your secret vault.',
    action: () => {
      toggleElements(pwdManager1Id, false); // Hide pwdmanager1.gif
      toggleElements(pwdManager2Id); // Show pwdmanager2.gif
    },
    ids: pwdManager2Id,
  },
  { 
    text: 'It\'s super important to choose a reputable password manager with robust encryption and security features to safeguard your sensitive information.',
    okActions: [
      () => toggleElements(all, false, true),
      () => navigateSlide(Slide3)
    ],
  },
];



export const dialogues3 = [
  { text: 'Slide 3 Dialogue 1' },
  { text: 'Slide 3 Dialogue 2' },
  { text: 'Slide 3 Dialogue 3'}
];
