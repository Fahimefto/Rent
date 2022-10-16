import Layout from '../components/Layout';
import LoginForm from '../components/LoginForm'
const Login = () => {
    return (
      <Layout title='Login'>
        <div>
          <LoginForm />
          <LoginForm />
        </div>
      </Layout>
    );
};
 
export default Login;