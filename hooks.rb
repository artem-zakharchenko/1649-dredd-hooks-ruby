require 'dredd_hooks/methods'

include DreddHooks::Methods

before "Machines > Machines collection > Get Machines" do |transaction|
    transaction['skip'] = "true"
end
