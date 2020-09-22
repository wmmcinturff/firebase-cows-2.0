import farmersView from '../components/views/farmersView';
import cowsView from '../components/views/cowsView';

const viewHelper = (id) => {
  $('#app').html('');
  switch (id) {
    case 'farmers-link':
      return farmersView.farmersView('Clicked Farmers Link');
    case 'cows-link':
      return cowsView.cowsView('Clicked Cows Link');
    default:
      return console.warn('nothing clicked');
  }
};
const viewListener = () => {
  $('body').on('click', 'li.nav-item', (e) => {
    viewHelper(e.currentTarget.id);
  });
};

export default { viewListener };
