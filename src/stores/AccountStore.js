import alt from '../alt';
import accountServerActions from '../actions/AccountServerActions';
import accountActions from '../actions/AccountActions';

class AccountStore {
  constructor () {
    this.bindActions(accountServerActions);
    this.bindActions(accountActions);

    this.prompted = false;
    this.loading = false;
    this.errors = {};

    this.verified = false;
    this.username = null;
  }

  skip () {
    this.setState({
      prompted: true
    });
  }

  login () {
    this.setState({
      loading: true,
      errors: {}
    });
  }

  logout () {
    this.setState({
      loading: false,
      errors: {},
      username: null,
      verified: false
    });
  }

  signup () {
    this.setState({
      loading: true,
      errors: {}
    });
  }

  loggedin ({username}) {
    this.setState({username, errors: {}, loading: false});
  }

  signedup ({username}) {
    this.setState({username, errors: {}, loading: false});
  }

  verified ({verified}) {
    this.setState({verified});
  }

  prompted ({prompted}) {
    this.setState({prompted});
  }

  errors ({errors}) {
    this.setState({errors, loading: false});
  }
}

export default alt.createStore(AccountStore);
