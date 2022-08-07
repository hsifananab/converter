import styles from './Contacts.module.css';
import { getContactsItems } from './contactsBase';

const Contacts = () => {
  const contactsItems = getContactsItems();
  return (
    <div className={styles.Contacts}>
      <nav className={styles.Contacts__nav}>
        {contactsItems.map(contactsItem => {
          const Icon = contactsItem.icon;

          return (
            <li className={styles.Contacts__item} key={contactsItem.id}>
              <a
                className={styles.Contacts__link}
                href={contactsItem.link}
                target="_blank"
                rel="noreferrer"
              >
                <Icon />
              </a>
            </li>
          );
        })}
      </nav>
    </div>
  );
};

export default Contacts;
