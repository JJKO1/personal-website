import { useI18n } from '../i18n/context';

export default function Footer() {
  const { t } = useI18n();
  const year = new Date().getFullYear();

  return (
    <footer>
      &copy; {year} Jonah. {t.footer}
    </footer>
  );
}
