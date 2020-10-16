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
    public function __construct($user)
    {
        $this->user = $user;
    }

    public function whatNext()
    {
        $role = $this->user->initial_role;
        $url = route('account.setup', ['role' => $role]);
        if ($role === 'student') {
            $action = "Join Classroom or Practice Questions";
        } elseif ($role === 'educator') {
            $action = "Join Organization";
        } else {
            $action = "Create Organization";
        }
        return [$url, $action];
    }
    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        [$url, $action] = $this->whatNext();
        return $this
            ->subject('Welcome to at-School')
            ->markdown('mails.welcome.mail')
            ->with([
                'name' => $this->user->first_name,
                'url' => $url,
                'action' => $action
            ]);
    }
}
