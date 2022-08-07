import { FiGithub } from 'react-icons/fi';
import { HiOutlineMail } from 'react-icons/hi';
import { TbBrandTelegram } from 'react-icons/tb';

const contactsItems = [
  {
    id: 1,
    label: 'Telegram',
    link: 'https://t.me/hsifananab',
    icon: TbBrandTelegram,
  },
  {
    id: 2,
    label: 'GitHub',
    link: 'https://github.com/hsifananab',
    icon: FiGithub,
  },
  {
    id: 3,
    label: 'Mail',
    link: 'mailto:hsif_def@gmail.com',
    icon: HiOutlineMail,
  },
];

export const getContactsItems = () => contactsItems;
export const getContactsItem = id =>
  contactsItems.find(contactsItem => contactsItem.id === id);
