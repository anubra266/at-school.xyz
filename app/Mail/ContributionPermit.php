<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ContributionPermit extends Mailable
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
        if (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on')
            $url = "https://";
        else
            $url = "http://";
        $url .= $_SERVER['HTTP_HOST'];
        return $this->from('info@at-school.xyz', 'at-School')
            ->subject(env('APP_NAME') . ' Contribution Permission')
            ->markdown('mails.contributionPermit.mail')
            ->with([
                'referrer' => authUser()->first_name . ' ' . authUser()->last_name,
                'name'=>$this->user->first_name,
                'image' => $this->user->profile_image,
                'url' => $url,
                'link'=>route('settings.general')
            ]);
    }
}
