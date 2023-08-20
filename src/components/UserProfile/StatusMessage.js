import React from 'react'
import PropTypes from 'prop-types'

/**
 * Composant StatusMessage.
 *
 * Affiche un message à l'utilisateur basé sur l'état de chargement et d'erreur.
 *
 * @component
 * @param {Object} props - Les propriétés du composant.
 * @param {boolean} props.isLoading - Indique si le chargement est en cours.
 * @param {Error|null} [props.error=null] - Une éventuelle erreur survenue lors du chargement.
 *
 * @example
 * // Affiche un message de chargement.
 * <StatusMessage isLoading={true} />
 *
 * @example
 * // Affiche un message d'erreur.
 * <StatusMessage isLoading={false} error={new Error('Une erreur est survenue')} />
 *
 * @returns {React.ReactNode} - Le message à afficher à l'utilisateur.
 */

const StatusMessage = ({ isLoading, error }) =>
  isLoading ? (
    <div>Loading accounts...</div>
  ) : error ? (
    <div>Error loading accounts: {error.message}</div>
  ) : null

StatusMessage.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.instanceOf(Error),
}

export default StatusMessage
