import { Profile } from 'components/Profile/Profile';
// import { Statistics } from 'components/Statistics/Statistics';
import user from '../user.json';
// import data from '../data.json';

export const App = () => {
  return (
    <>
      <Profile user={user} />
      {/* <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} /> */}
    </>
  );
};
