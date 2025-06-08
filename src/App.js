import StarRating from './components/StarRating';
import Dialog from './components/Dialog';
import { useState } from 'react';

function App() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <main>
        <div className="container rating centralize">
          <div class="box">
            <StarRating />
          </div>
            <button className="dialog-btn btn" onClick={() => setIsDialogOpen(true)}>Open Dialog</button>
            {isDialogOpen && <Dialog onClose={() => setIsDialogOpen(false)} />}
        </div>
      </main>
    </>
  );
}

export default App;
