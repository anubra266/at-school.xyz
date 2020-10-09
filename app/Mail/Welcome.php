<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class Welcome extends Mailable
{
    use Queueable, SerializesModels;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this
            ->to(authUser()->email)
            ->subject('Welcome to at-School')
            ->markdown('mails.welcome.mail')
            ->with([
                'name' => authUser()->first_name,
                'link' => 'https://at-school.dev'
            ]);
    }
}
