FROM alpine

RUN \
ls / && \
ls && \
apk add git python3 && \
python3 -m pip install -r requirements.txt
