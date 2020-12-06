ls|grep -v sealert.log | grep -v mysqltable | grep -v scrollkeeper-root
|xargs -i cp -rp {} ~/tmphome/



cp -ra $(ls -a|grep -v "node_modules\|Dockerfile\|README."|xargs) ../generator-choerodon-ui-pro

sudo ls -a|grep -v 'node_modules\|Dockerfile\|README.'|xargs -i sudo cp -rp {} ~/Desktop/tmp 

cp -rp `ls|grep -v "node_modules\|Dockerfile\|README*"` ~/Desktop/tmp 