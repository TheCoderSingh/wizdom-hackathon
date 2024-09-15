import { Link } from 'react-router-dom';

import Button from '../components/Button';
import "../css/landing.scss";

export default function Landing() {
  return (
    <div className="landing-container">
      <div className="logo-container">
        <img src="/primary-logo.svg" alt="Wizdom Logo" className="logo" width={250} />
      </div>
      <div className="button-container">
        <Link to="/signup">
          <Button full>Let's get started</Button>
        </Link>
      </div>
    </div>
  );
}