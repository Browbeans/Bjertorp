import axios from 'axios';
import { Component, createContext } from 'react';



export const RequestContext = createContext({
    setPosts: () => {}, 
    allPosts: [], 
    specificPost: {},
    addSpecificPost: () => {}
});

class RequestProvider extends Component {

  state = {
    allPosts: [], 
    specificPost: {}
  }
 
  addPostsToState = async () => {
    const request = await axios.get("/allPosts")
    this.setState({ allPosts: request.data })
  }

  addSpecificPostToState = async (id) => {
    const request = await axios.get("/specificPost/" + id)
    this.setState({specificPost: request.data})
  }

  componentDidMount = () => {
    this.addPostsToState()
  };

  render() {
    return (
      <RequestContext.Provider
        value={{  
        allPosts: this.state.allPosts,
        setPosts: this.addPostsToState,
        addSpecificPost: this.addSpecificPostToState,
        specificPost: this.state.specificPost
        }}
      >
        {this.props.children}
      </RequestContext.Provider>
    );
  }
}

export default RequestProvider;