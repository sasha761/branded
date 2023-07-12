<?php
/**
 * Class NotificationSystem
 * It contains all Notification methods
 */

class NotificationSystem {

		public $RegisterSystem;

    public $to_admin;
    public $headers; 
    public $subject; 

    public function __construct() {

			// Log::info("init GivestartDonations");

			$this->RegisterSystem = new RegisterSystem;
      $this->to_admin       = get_option('admin_email');
      $this->headers        = 'Content-Type:text/html;charset=UTF-8';
      $this->subject        = get_option('home');


      // add_action( 'wp_ajax_contactUs', array( $this, 'contactUs' ) );
      // add_action( 'wp_ajax_nopriv_contactUs', array( $this, 'contactUs' ) );

      add_action( 'wp_ajax_subscribe', array( $this, 'subscribe' ) );
      add_action( 'wp_ajax_nopriv_subscribe', array( $this, 'subscribe' ) );
    }

    // public function contactUs(){

    //   $user_mail_body = 'From: ' . $_POST['name'] . " - " . $_POST['mail'] . "\n" .
    //                     'Message: ' . $_POST['text'];

    //   $subject .= 'Contact us';


    //   wp_mail( $this->to_admin, $this->subject, $user_mail_body, $this->headers );
    // }

    public function subscribe(){

      $email  = $_POST['email'];
      $gender = $_POST['gender'];

    	$registerRespons = $this->RegisterSystem->registerUser($email, $gender);
      

      $user_mail_body = 'Спасибо за подписку! Ваш скидочный купон  <b> kapd7bvu </b>';
      wp_mail( $email, $this->subject, $user_mail_body, $this->headers );
      
    }
}

global $NotificationSystem;
$NotificationSystem = new NotificationSystem();