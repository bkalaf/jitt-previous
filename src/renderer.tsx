import Realm from 'realm';
Realm.flags.THROW_ON_GLOBAL_REALM = true;
import './assets/css/app.css';
import { createRoot } from 'react-dom/client';
import { AppRoot } from './components/AppRoot';
import { AppProviders } from './components/AppProviders';

const el = document.getElementById('root');
if (el == null) throw new Error('no root');

createRoot(el).render(AppRoot({ ProviderComponents: AppProviders }));
