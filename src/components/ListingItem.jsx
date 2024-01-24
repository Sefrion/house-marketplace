import { Link } from 'react-router-dom';
import deleteIcon from '../assets/svg/deleteIcon.svg';
import editIcon from '../assets/svg/editIcon.svg';
import bedIcon from '../assets/svg/bedIcon.svg';
import bathtubIcon from '../assets/svg/bathtubIcon.svg';
import PropTypes from 'prop-types';

function ListingItem({ listing, id, onEdit, onDelete }) {
	return (
		<li className='categoryListing'>
			<Link to={`/category/${listing.type}/${id}`} className='categoryListingLink'>
				<img
					src={listing.imageUrls[0]}
					alt={listing.name}
					className='categoryListingImg'
				/>
				<div className='categoryListingDetails'>
					<p className='categoryLisitngLocation'>{listing.location}</p>
					<p className='categoryListingName'>{listing.name}</p>
					<p className='categoryListingPrice'>
						$
						{listing.offer
							? listing.discountedPrice
									.toString()
									.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
							: listing.regularPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
						{listing.type === 'rent' && ' / Month'}
					</p>
					<div className='categoryListingInfoDiv'>
						<img src={bedIcon} alt='bed' />
						<p className='categoryListingInfoText'>
							{listing.bedrooms > 1 ? `${listing.bedrooms} Bedrooms` : '1 Bedroom'}
						</p>
						<img src={bathtubIcon} alt='bath' />
						<p className='categoryListingInfoText'>
							{listing.bathrooms > 1 ? `${listing.bathrooms} Bathrooms` : '1 Bathroom'}
						</p>
					</div>
				</div>
			</Link>

			{onDelete && (
				<img
					src={deleteIcon}
					alt='delete'
					className='removeIcon'
					onClick={() => onDelete(listing.id, listing.name)}
				/>
			)}

			{onEdit && (
				<img
					src={editIcon}
					alt='edit'
					className='editIcon'
					onClick={() => onEdit(id)}
				/>
			)}
		</li>
	);
}

ListingItem.propTypes = {
	listing: PropTypes.object,
	id: PropTypes.string,
	onDelete: PropTypes.func,
	onEdit: PropTypes.func,
};

export default ListingItem;
