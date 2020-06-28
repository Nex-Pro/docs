FROM python

WORKDIR /root
ADD requirements.txt /root

RUN python3 -m pip install -r requirements.txt
