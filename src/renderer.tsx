import './assets/css/app.css';
import { createRoot } from 'react-dom/client';
import { AppRoot } from './components/AppRoot';

const el = document.getElementById('root');
if (el == null) throw new Error('no root');

createRoot(el).render(AppRoot());