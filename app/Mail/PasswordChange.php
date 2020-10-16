<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;
use Stevebauman\Location\Facades\Location;
use Illuminate\Contracts\Queue\ShouldQueue;

class PasswordChange extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($user)
    {
        $this->user = $user;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        $ip = request()->getClientIp();
        $location_obj = Location::get($ip);
        $location = $location_obj ? "$location_obj->cityName, $location_obj->regionCode, $location_obj->countryCode" : "Unknown Location";
        if (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on')
            $url = "https://";
        else
            $url = "http://";
        $url .= $_SERVER['HTTP_HOST'];
        return $this->from('security@at-school.xyz', 'at-School')
            ->subject(env('APP_NAME') . ' Password Change')
            ->markdown('mails.passwordchange.mail')
            ->with([ 
                'name' => $this->user->first_name,
                'image' => $this->user->profile_image,
                'ip' => $ip,
                'location' => $location,
                'url' => $url
            ]);
    }
}
