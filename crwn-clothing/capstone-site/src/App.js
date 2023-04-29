// import './components/directory/directory.styles.scss';
// import './components/category-item/category-item.styles.scss';
import Directory from './components/directory/directory.component';
import categories from './components/category-item/directory';

const App = () => {
  return (
    <Directory 
      categories={categories}
    />
  );
}

export default App;
