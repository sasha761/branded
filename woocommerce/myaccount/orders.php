<?php
/**
 * Orders
 *
 * Shows orders on the account page.
 *
 * This template can be overridden by copying it to yourtheme/woocommerce/myaccount/orders.php.
 *
 * HOWEVER, on occasion WooCommerce will need to update template files and you
 * (the theme developer) will need to copy the new files to your theme to
 * maintain compatibility. We try to do this as little as possible, but it does
 * happen. When this occurs the version of the template file will be bumped and
 * the readme will list any important changes.
 *
 * @see https://docs.woocommerce.com/document/template-structure/
 * @package WooCommerce\Templates
 * @version 3.7.0
 */

defined( 'ABSPATH' ) || exit;

do_action( 'woocommerce_before_account_orders', $has_orders ); ?>

<?php if ( $has_orders ) : ?>

		<div class="woocommerce-MyAccount-orders p-my-account__order-list">
			<?php
			$currency = get_woocommerce_currency_symbol();

			foreach ( $customer_orders->orders as $customer_order ) :
				$order      = wc_get_order( $customer_order ); // phpcs:ignore WordPress.WP.GlobalVariablesOverride.Prohibited
				$item_count = $order->get_item_count() - $order->get_item_count_refunded();
				$date				= wc_format_datetime( $order->get_date_created(), 'm.d.Y' );
				$number			= $order->get_order_number();
				$status			= wc_get_order_status_name( $order->get_status() );
				?>
				<div class="c-order">
					<div class="c-order__info">
						<?= "<time>$date</time>" . ' הזמנה מס׳' . $number . ' - ' ?>
						<span><?= $status ?></span>
					</div>
					<ul class="c-order__list">
						<?php
						foreach ( $order -> get_items() as $item_id => $item ):
							$categories = get_the_terms( $item -> get_product_id(), 'product_cat' );
						?>
						<li class="c-order-item c-order-item-<?= $item -> get_product_id() ?>">
							<img class="c-order-item__image" src="<?= get_the_post_thumbnail_url( $item -> get_product_id() ) ?>">
							<div class="c-order-item__title">
								<h3><?= $item -> get_name() ?></h3>
								<p class="c-order-item__category"><?= $categories[0] -> name; ?></p>
							</div>
							<div class="c-order-item__count c-quantity">
								<input type="number" readonly value="<?= $item -> get_quantity() ?>">
							</div>
							<div class="c-order-item__price"><?= $currency . $item -> get_total() ?></div>
						</li>
						<?php endforeach; ?>
					</ul>
				</div>
				<?php
			endforeach;
			?>
		</div>

	<?php do_action( 'woocommerce_before_account_orders_pagination' ); ?>

	<?php if ( 1 < $customer_orders->max_num_pages ) : ?>
		<div class="woocommerce-pagination woocommerce-pagination--without-numbers woocommerce-Pagination">
			<?php if ( 1 !== $current_page ) : ?>
				<a class="woocommerce-button woocommerce-button--previous woocommerce-Button woocommerce-Button--previous button" href="<?php echo esc_url( wc_get_endpoint_url( 'orders', $current_page - 1 ) ); ?>"><?php esc_html_e( 'Previous', 'woocommerce' ); ?></a>
			<?php endif; ?>

			<?php if ( intval( $customer_orders->max_num_pages ) !== $current_page ) : ?>
				<a class="woocommerce-button woocommerce-button--next woocommerce-Button woocommerce-Button--next button" href="<?php echo esc_url( wc_get_endpoint_url( 'orders', $current_page + 1 ) ); ?>"><?php esc_html_e( 'Next', 'woocommerce' ); ?></a>
			<?php endif; ?>
		</div>
	<?php endif; ?>

<?php else : ?>
	<div class="woocommerce-message woocommerce-message--info woocommerce-Message woocommerce-Message--info woocommerce-info">
		<a class="woocommerce-Button button" href="<?php echo esc_url( apply_filters( 'woocommerce_return_to_shop_redirect', wc_get_page_permalink( 'shop' ) ) ); ?>"><?php esc_html_e( 'Browse products', 'woocommerce' ); ?></a>
		<?php esc_html_e( 'No order has been made yet.', 'woocommerce' ); ?>
	</div>
<?php endif; ?>

<?php do_action( 'woocommerce_after_account_orders', $has_orders ); ?>
