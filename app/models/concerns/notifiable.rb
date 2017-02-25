module Notifiable
  extend ActiveSupport::Concern

  def notify(opts)
    Pusher.trigger(
      "lol-optimizer-channel:#{opts[:user_id]}",
      opts[:event],
      opts[:payload]
    )
  end
end