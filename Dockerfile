FROM alpine

WORKDIR /root
ADD requirements.txt /root

RUN \
apk add git python3 py3-pip && \
python3 -m pip install -r requirements.txt
