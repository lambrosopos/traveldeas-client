import React from 'react'

const [isLoading, setIsLoading] = React.useState(false);
const [userToken, setUserToken] = React.useState('')

const authContext = React.useMemo(() => {
  return {
    signIn: () => {
      setIsLoading(false);
      setUserToken('asdf');
    },
    signUp: () => {
      setIsLoading(false);
      setUserToken('asdf');
    },
    signOut: () => {
      setIsLoading(false);
      setUserToken('');
    }
  }
}, [])
