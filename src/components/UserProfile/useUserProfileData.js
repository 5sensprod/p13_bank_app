import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updateUserProfile, fetchUserProfile } from '../../actions/userActions'
import { fetchUserAccounts } from '../../actions/accountActions'

/**
 * Custom hook to manage user profile data.
 *
 * @returns {Object} Object containing user profile data and handlers.
 */
const useUserProfileData = () => {
  const dispatch = useDispatch()

  // Fetch user data and accounts from the Redux store
  const user = useSelector((state) => state.user.user)
  const accounts = useSelector((state) => state.accounts.accounts)
  const loadingAccounts = useSelector((state) => state.accounts.loading)
  const errorAccounts = useSelector((state) => state.accounts.error)

  // Manage edit mode state
  const [editMode, setEditMode] = useState(false)

  // Manage first name and last name state for editing purposes
  const [newFirstName, setNewFirstName] = useState(user?.firstName)
  const [newLastName, setNewLastName] = useState(user?.lastName)

  // Update first name and last name state when user data changes
  useEffect(() => {
    setNewFirstName(user?.firstName)
    setNewLastName(user?.lastName)
  }, [user?.firstName, user?.lastName])

  // Fetch user profile on component mount
  useEffect(() => {
    dispatch(fetchUserProfile())
  }, [dispatch])

  const userId = user?.id

  // Fetch user accounts if a user ID exists
  useEffect(() => {
    if (userId) {
      dispatch(fetchUserAccounts(userId))
    }
  }, [dispatch, userId])

  /**
   * Enable edit mode.
   */
  const handleEdit = () => setEditMode(true)

  /**
   * Handle saving user profile updates.
   *
   * @param {string} firstName - New first name of the user.
   * @param {string} lastName - New last name of the user.
   */
  const handleSave = (firstName, lastName) => {
    dispatch(updateUserProfile({ firstName, lastName }))
    setEditMode(false)
  }

  /**
   * Cancel editing and revert back to original user data.
   */
  const handleCancel = () => {
    setNewFirstName(user?.firstName)
    setNewLastName(user?.lastName)
    setEditMode(false)
  }

  return {
    user,
    accounts,
    loadingAccounts,
    errorAccounts,
    editMode,
    newFirstName,
    newLastName,
    handleEdit,
    handleSave,
    handleCancel,
  }
}

export default useUserProfileData
