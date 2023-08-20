import PropTypes from 'prop-types'
import Account from './Account'
import ListRenderer from '../helpers/ListRenderer'
import SRTitle from '../SRTitle'

/**
 * A component that renders a list of user accounts.
 *
 * @component
 * @param {Object} props
 * @param {Object[]} props.accounts - An array of account objects to be displayed.
 * @param {string} props.accounts[].title - The title of the account.
 * @param {number} props.accounts[].balance - The balance amount of the account.
 * @param {string} [props.accounts[].description] - An optional description of the account.
 * @returns {React.ReactNode} The rendered list of accounts.
 */

const AccountSection = ({ accounts }) => (
  <>
    <SRTitle text="Accounts" />
    <ListRenderer data={accounts} Component={Account} propName="account" />
  </>
)

AccountSection.propTypes = {
  accounts: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      balance: PropTypes.number.isRequired,
      description: PropTypes.string,
    }),
  ).isRequired,
}

export default AccountSection
