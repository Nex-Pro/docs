FROM alpine

WORKDIR /root
ADD requirements.txt /root

RUN \
apk add git python3 docker-cli && \
python3 -m pip install -r requirements.txt
