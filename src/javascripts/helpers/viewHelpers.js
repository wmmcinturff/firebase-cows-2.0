import farmersView from '../components/views/farmersView';
import cowsView from '../components/views/cowsView';
import addCowView from '../components/views/addCowView';

const viewHelper = (id) => {
  $('#app').html('');
  switch (id) {
    case 'farmers-link':
      return farmersView.farmersView('Clicked Farmers Link');
    case 'cows-link':
      return cowsView.cowsView('Clicked Cows Link');
    case 'add-cow-link':
      return addCowView.addCowView();
    default:
      return console.warn('nothing clicked');
  }
};
const viewListener = (view) => {
  viewHelper(view);

  $('body').on('click', 'li.nav-item', (e) => {
    viewHelper(e.currentTarget.id);
  });
};

export default { viewListener };
