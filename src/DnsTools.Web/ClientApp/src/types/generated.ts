//     This code was generated by a Reinforced.Typings tool. 
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.

export interface IpData
{
	asn?: number;
	asnName?: string;
	city?: string;
	country?: string;
	countryIso?: string;
	hostName?: string;
}
export interface PingRequest
{
	host: string;
	protocol: Protocol;
	workers?: ReadonlyArray<string>;
}
export interface WorkerResponse<T>
{
	response: T;
	workerId: string;
}
export interface Config
{
	workers: WorkerConfig[];
}
export interface WorkerConfig
{
	country: string;
	id: string;
	location: string;
	name: string;
}
export interface IPingReply
{
	bytes: number;
	rawReply: string;
	rtt: number;
	seq: number;
	ttl: number;
}
export interface IPingTimeout
{
	seq: number;
}
export interface IPingSummary
{
	rawReply: string;
	received: number;
	sent: number;
}
export interface IHostLookupResult
{
	ip: string;
}
export interface ITracerouteReply
{
	ip: string;
	rawReply: string;
	rtt: number;
	seq: number;
}
export enum PingResponseType { 
	None = 0, 
	Reply = 1, 
	Timeout = 2, 
	Summary = 3, 
	Error = 4, 
	Lookup = 5
}
export enum TracerouteResponseType { 
	None = 0, 
	Reply = 1, 
	Timeout = 2, 
	Error = 3, 
	Completed = 4, 
	Lookup = 5
}
export interface IError
{
	message: string;
}
export enum Protocol { 
	Any = 0, 
	Ipv4 = 1, 
	Ipv6 = 2
}
export enum DnsLookupType { 
	A = 0, 
	Aaaa = 1, 
	Cname = 2, 
	Mx = 3, 
	Ns = 4, 
	Ptr = 5, 
	Soa = 6, 
	Txt = 7
}
